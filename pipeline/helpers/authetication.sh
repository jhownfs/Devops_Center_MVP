#!/bin/bash

set -e 

echo "$JWT_SECRET"  > secret.key
echo "#### Step to Authenticate in Organization #####"
 ##sf org login jwt --username $USERNAME --jwt-key-file ./secret.key --client-id $KEY --alias SFDX --instance-url $URL