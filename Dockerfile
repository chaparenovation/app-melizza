Copiar

# ══════════════════════════════════════════════════
#  MODO: MANTENIMIENTO
#  Para volver a la app normal, restaura el Dockerfile
#  original (el que está guardado como Dockerfile.app)
# ══════════════════════════════════════════════════
FROM nginx:alpine
COPY maintenance.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
 
