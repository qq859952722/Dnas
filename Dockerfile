FROM alpine:edge

ENV PATH="/opt/bin:$PATH"

COPY opt /opt

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories  && \
    apk -U upgrade --no-cache && apk add --update --no-cache ca-certificates tzdata mailcap jq bash dropbear openssh-sftp-server transmission-daemon samba-server && \
    chmod -R 755 /opt/bin  &&  \
   echo "root:password" | chpasswd     && chmod -R 755 /opt/profile/samba/startsamba.sh && chmod -R 755 /opt/profile/samba/stopsamba.sh && chmod -R 755 /opt/start.sh


WORKDIR /profile

CMD ["/opt/start.sh"]
