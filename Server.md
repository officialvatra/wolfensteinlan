# Gammel Debian server
## Root
Navn: debian
Root passord: Admin

## Bruker
navn: admin admin
brukernavn: blsh
password: Admin

# Ny Ubuntu server
## Root
Navn: blsh
Maskin navn: blsh
Passord: Admin
## Bruker
brukernavn: blsh
passord: Admin

# Setup
Hvordan sette up ftp server på Ubuntu
1. Installere Ubuntu på en maskin som har minimumskravene
2. Last ned vsftpd fra apt package manageren
3. Rediger config vilen som ligger i /etc/vsftpd.conf og set anonymous_enable=YES
4. restart server med `sudo systemctl restart vsftpd.service`
5. Lag en mappe /srv/files/ftp legg inn filene du vil dele her