#!/bin/bash
ansible-playbook -i deploy/hosts deploy/play.yml --limit staging.cbsoft.javascript-toolkit.com
