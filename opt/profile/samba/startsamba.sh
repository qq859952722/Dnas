#!/bin/bash  
  
smbd -s /profile/samba
  
nmbd -s /profile/samba
  
echo " smbd 和 nmbd 进程已启动。"

  
# 定义函数来检查进程是否存在  
check_process() {  
    local process_name=$1  
    pgrep -x "$process_name"  
}  
  
# 无限循环，每10秒检查一次进程  
while true; do  
    # 检查smbd进程  
    if check_process smbd; then  
        echo "smbd 进程正在运行，继续检测..."  
    fi  
      
    # 检查nmbd进程  
    if check_process nmbd; then  
        echo "nmbd 进程正在运行，继续检测..."  
    fi  
      
    # 如果两个进程都不存在，则退出循环  
    if ! check_process smbd && ! check_process nmbd; then  
        echo "smbd 和 nmbd 进程都不存在，停止检测。"  
        break  
    fi  
      
    # 等待10秒  
    sleep 10  
done