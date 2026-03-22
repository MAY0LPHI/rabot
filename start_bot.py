import paramiko

HOST = "185.169.99.108"
USER = "root"
PASSWORD = "V2eEz76fNz2mOwB9O4"

def run():
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(HOST, username=USER, password=PASSWORD)
    
    cmd = "cd /root/rabot && npm install && npx pm2 start index.js --name knowxly --time && npx pm2 save"
    print("Running:", cmd)
    stdin, stdout, stderr = ssh.exec_command(cmd)
    
    print("STDOUT:", stdout.read().decode())
    print("STDERR:", stderr.read().decode())
    ssh.close()

if __name__ == "__main__":
    run()
