#!/bin/bash  
  
# 定义一个函数来关闭指定名称的进程  
kill_process() {  
    local process_name=$1  
    echo "正在关闭 $process_name 进程..."  
    pkill -f "$process_name" || true  # 使用 -f 来匹配完整的命令行  
    # 或者使用 killall，但注意 killall 可能会受到 /etc/killall.conf 的影响  
    # killall "$process_name"  
}  
  
# 关闭 smbd 进程  
kill_process smbd  
  
# 关闭 nmbd 进程  
kill_process nmbd  
  
echo "所有 smbd 和 nmbd 进程已关闭。"

#!/bin/bash  
  
# 定义检查进程的函数  
check_processes() {  
    local smbd_count=$(pgrep smbd | wc -l)  
    local nmbd_count=$(pgrep nmbd | wc -l)  
      
    if [ $smbd_count -gt 0 ]; then  
        echo "smbd 进程正在运行，数量: $smbd_count"  
    else  
        echo "smbd 进程未运行"  
    fi  
      
    if [ $nmbd_count -gt 0 ]; then  
        echo "nmbd 进程正在运行，数量: $nmbd_count"  
    else  
        echo "nmbd 进程未运行"  
    fi  
}  
  
# 无限循环，每10秒执行一次进程检查  
while true; do  
    check_processes  
    sleep 10  # 等待10秒  
done