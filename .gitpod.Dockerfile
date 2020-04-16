FROM gitpod/workspace-mongodb
                    
USER gitpod
RUN sudo apt-get update && \
    sudo apt-get install -y xyz && \
    sudo apt-get install -y net-tools && \
    ifconfig && \
    sudo rm -rf /var/lib/apt/lists/*
    