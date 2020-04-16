FROM gitpod/workspace-mongodb
                    
USER gitpod
RUN sudo apt-get update && \
    sudo apt-get install -y xyz && \
    sudo rm -rf /var/lib/apt/lists/*
    