#!/bin/bash

echo "의존성 버전 확인:"

GREEN='\033[32m'
NC='\033[0m'

found_outdated=false

while IFS=: read -r package version; do
  if [[ -n "$version" && $package =~ ^[[:space:]]*\"?@?[a-zA-Z].*\"?$ ]]; then
    package=$(echo $package | xargs | sed 's/"//g')
    version=$(echo $version | xargs | sed 's/"//g')
    latest=$(pnpm view $package version)
    # 현재 버전과 최신 버전이 다른 경우만 출력
    if [[ "$version" != "$latest" ]]; then
      echo -e "$package: Current=$version, Latest=${GREEN}$latest${NC}"
      found_outdated=true
    fi
  fi
done < pnpm-workspace.yaml

if [[ "$found_outdated" = false ]]; then
  echo -e "\n모든 패키지가 최신입니다"
fi