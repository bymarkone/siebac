#!/bin/bash
ansible-playbook -i deploy/hosts deploy/play.yml --limit 50.56.172.10
