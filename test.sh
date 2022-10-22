#!/bin/bash

uid="gorirasan"

if [[ $uid =~ (go)(rira)(san) ]] ;then
    echo ${#BASH_REMATCH[@]}
    echo ${BASH_REMATCH[@]} #キャプチャにマッチしたもの全て
    echo ${BASH_REMATCH[0]} # マッチしたもに全て
    echo ${BASH_REMATCH[1]}${BASH_REMATCH[2]}
    echo ${BASH_REMATCH[1]}${BASH_REMATCH[3]}
fi