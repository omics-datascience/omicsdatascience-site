#!/bin/bash
VERSION=$(cat $BASEDIR/package.json | jq '.version' -r)
echo "VERSION=$VERSION"
