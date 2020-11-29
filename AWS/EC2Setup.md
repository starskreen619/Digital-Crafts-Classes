AWS Guide for Frontend Project

1. AWS: Mbr root user sign in
   1.1 AWS: Select "Instances" from left menu on EC2 console
   1.2 AWS: Check box next to Mbr's Instance ID and click "Connect" (top right)
   1.3 AWS: Select "SSH client" tab on "Connect to instance" page
   1.4 AWS: Copy "ssh" command just above "Note:" in blue box
2. Terminal: `cd ~` and Enter
   2.1 Terminal: Navigate to folder where Mbr's ec2_key.pem file is saved
   2.2 Terminal: In ec2_keys folder paste "ssh" command from AWS and Enter
   2.3 Terminal: Should get several lines with "Last login:" followed by cmd prompt
   2.4 Terminal: Mbr is now logged into AWS EC2 server through Terminal
3. GitHub: Navigate to repository where group Frontend project is saved
   3.1 GitHub: Copy https code in dropdown from green "Code" button
   3.2 Terminal: `git clone [paste GitHub https code]` and Enter
   3.3 Terminal: Should get several lines detailing cloning from GitHub to AWS
   3.4 Terminal: `cd [name of repository now cloned to AWS]` and Enter
4. Terminal: `nano serve.sh` and Enter (goes to serve.sh dialog box)
   4.1 Terminal box: Should get serve.sh showing 12 menu choices
   4.2 Terminal box: `serve -p 3001` and Enter
   4.3 Terminal: Should return to main cmd prompt (may need ^X to Exit)
5. Terminal: `ls -l`
   5.1 Terminal: `chmod 755 serve.sh`
   5.2 Terminal: `ls -l`
   5.3 Terminal: `./serve.sh`
   5.4 Terminal: Ignore initial msg "ERROR:" as following msg "Serving!" means success
6. AWS: Select "Instances" (from top "EC2>Instances>[ID]>Connect to instance")
   6.1 AWS: Select "Security" tab (2d from left) and click "[ID](Webserver Ports)"
   6.2 AWS: Select "Edit inbound rules" from top right "Actions" menu
   6.3 AWS: Click "Add rule", Port range: "3001", Source: "Anywhere", click "Save rules"
   6.4 AWS: Should return to previous page with green notice "rules successfully modified"
7. AWS: Select "Instances" from left menu on EC2 console
   7.1 AWS: Select "Details" tab
   7.2 AWS: Copy "Public IPv4 DNS"
8. Web: Open web browser and paste IP address from AWS
   8.1 Web: Append `[Public IPv4 DNS]:8080` and Enter for API msg
   8.2 Web: Replace ":8080" with ":3001" to see index of group Frontend project
9. Terminal: `^C` to end network connection to AWS and return to cmd prompt in project folder
   9.1 Terminal: `pm2 start serve.sh --name [project name]` and Enter
   9.2 Terminal: `git pull` and Enter should get msg "Already up to date."
