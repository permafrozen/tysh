#!/usr/bin/env bash
# inspired by @ricecracker2234 on dc

reload() {
    pkill gjs
    ags run ./src/app.ts &
}

ags quit
reload

while inotifywait -e modify -r ./src; do
    reload
done
