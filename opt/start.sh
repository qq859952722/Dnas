#!/bin/bash  
# 目标文件夹路径  
target_dir="/profile"  
  
# 如果目标文件夹不存在，则创建软链接到/opt/profile  
if [ ! -d "$target_dir" ]; then  
    # 确保/opt/profile存在  
    if [ ! -d "/opt/profile" ]; then  
        echo "Error: /opt/profile does not exist. Cannot create symlink."  
        exit 1  
    fi  
      
    # 创建软链接  
    ln -s /opt/profile "$target_dir"  
    echo "Created symlink $target_dir -> /opt/profile"  
else  
    echo "$target_dir already exists. No symlink created."  
fi  
function copy_if_not_exists() {  
    local source_path="/opt/profile/$1"  
    local dest_path="/profile/$1"  
    local dest_dir="/profile"  
  
    # 检查目标目录是否存在，如果不存在则创建  
    if [ ! -d "$dest_dir" ]; then  
        mkdir -p "$dest_dir"  
    fi  
  
    # 检查文件或文件夹是否存在于目标路径  
    if [ ! -e "$dest_path" ]; then  
        # 如果不存在，则从源路径复制到目标路径  
        cp -r "$source_path" "$dest_dir"  
        echo "Copied $source_path to $dest_dir"  
    else  
        echo "$dest_path already exists. No action taken."  
    fi  
}

for item in /opt/profile/*; do    
    copy_if_not_exists "$(basename "$item")"
done

supervisord -c /profile/super.conf