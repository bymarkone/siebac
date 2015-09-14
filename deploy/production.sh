#!/bin/bash
ansible-playbook -i deploy/hosts deploy/play.yml --limit cbsoft.javascript-tookit.com
