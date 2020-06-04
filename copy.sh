#!/bin/bash

# Copy all dotfiles except those within .git/
# and the copy script to the home directory, ~
rsync -r --exclude ".git/" --exclude "copy.sh" . ~
