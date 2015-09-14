#!/bin/bash
ansible-playbook -i deploy/hosts deploy/play.yml --limit cbsoft.javascript-toolkit.com
