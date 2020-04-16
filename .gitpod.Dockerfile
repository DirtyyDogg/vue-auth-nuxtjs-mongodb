FROM gitpod/workspace-mongodb
                    
USER gitpod
RUN sudo apt-get update && \
    sudo apt-get install -y xyz net-tools && \
    sudo rm -rf /var/lib/apt/lists/*

RUN useradd --create-home --shell /bin/bash user \
    && echo "user ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/user

# Don't be root.
USER user
ENV HOME /home/user
WORKDIR /home/user

# Configure bash prompt.
RUN echo "\n# Colored and git aware prompt." >> /home/user/.bashrc \
 && echo "PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$(__git_ps1 \" (%s)\") $ '" >> /home/user/.bashrc

# Install the latest Node Version Manager.
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

# Install latest Node.js, npm and Yarn.
ENV NVM_DIR="/home/user/.nvm"
RUN . $NVM_DIR/nvm.sh \
 && nvm install v10.15.0 \
 && npm install -g yarn
ENV PATH="${PATH}:${NVM_DIR}/versions/node/v10.15.0/bin"

# Install the Theia IDE with all features available.
COPY --chown=user:user theia /home/user/.theia/
RUN cd /home/user/.theia/ \
 && yarn \
 && yarn theia build

    