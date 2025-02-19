#!/bin/bash

echo "의존성 버전 확인:"

GREEN='\033[32m'
NC='\033[0m'

found_outdated=false

# package.json에서 dependencies와 devDependencies 추출
dependencies=$(jq -r '.dependencies // empty | to_entries[] | "\(.key):\(.value)"' package.json)
devDependencies=$(jq -r '.devDependencies // empty | to_entries[] | "\(.key):\(.value)"' package.json)

check_version() {
  local package=$1
  local version=$2
  
  # 버전에서 ^, ~ 등의 기호 제거
  version=$(echo $version | sed 's/[\^~]//g')
  
  latest=$(pnpm view $package version)
  if [[ "$version" != "$latest" ]]; then
    echo -e "$package: Current=$version, Latest=${GREEN}$latest${NC}"
    found_outdated=true
  fi
}

echo -e "\n[Dependencies]"
while IFS=: read -r package version; do
  if [[ -n "$version" && -n "$package" ]]; then
    check_version "$package" "$version"
  fi
done <<< "$dependencies"

echo -e "\n[DevDependencies]"
while IFS=: read -r package version; do
  if [[ -n "$version" && -n "$package" ]]; then
    check_version "$package" "$version"
  fi
done <<< "$devDependencies"

if [[ "$found_outdated" = false ]]; then
  echo -e "\n모든 패키지가 최신입니다"
fi