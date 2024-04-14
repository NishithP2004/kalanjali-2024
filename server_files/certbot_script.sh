#!/bin/bash

# Obtain SSL certificate using Certbot
certbot certonly --standalone --non-interactive --agree-tos --email bl.en.u4cse22138@bl.students.amrita.edu -d kalanjali.blr.amrita.edu

# Renew SSL certificate
certbot renew --quiet