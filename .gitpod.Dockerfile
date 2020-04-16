FROM gitpod/workspace-mongodb
                    
USER gitpod
RUN sudo apt-get update && \
    sudo apt-get install -y xyz && \
    sudo apt-get install -y net-tools && \
    sudo useradd -m -d /var/www/superior -s /bin/bash -p superior superior && \
    ifconfig && \
    sudo rm -rf /var/lib/apt/lists/*
    