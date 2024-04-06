# Properties editor

## Overview 

This repository include dist files, it because the GitHub link is used in the properties editor directly to install this package without need npm package.

## How to create new versions

We will work directly in the master branch with new features. When a new version is ready, we must create a new branch which his name will be the version number. And then where the package is installed you must use the correctly branch to link.

```json
{
  "dependencies": {
    "@pb/properties-editor": "github:code-easy-platform/properties-editor#1.0.0",
  }
}
```
Which:

`"{package-name}": "github:{organization-name|user-name}/{repository-name}#{branch-name}",`
