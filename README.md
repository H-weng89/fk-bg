# fk-back

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 部署流程
打包之后，进入服务器
cd /home/node/static  fk-front fk-bg分别为前台和后台的打包文件，把打包好的文件替换进去
cd /usr/local/nginx/conf 修改nginx.conf:
    server {
        listen     80;
        listen [::]:80;
        server_name  idea.fzu.edu.cn;
         
         location  /{
            root  /home/node/static/fk-front;
            index  index.html index.htm;
            try_files  $uri $uri/ /index.html;
        }
            location  /fk-bg{
            root  /home/node/static0;
            index  index.html index.htm;
            try_files  $uri $uri/ /index.html;
           }
          
    }
    运行以下命令
    cd /usr/local/nginx/sbin
    ./nginx -s stop
    ./nginx
    
