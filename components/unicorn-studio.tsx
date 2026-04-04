'use client'

import { useEffect } from 'react'

interface UnicornStudioProps {
  projectId?: string
  width?: string | number
  height?: string | number
}

export function UnicornStudio({ projectId = 'Zdn4myxNEWraQceD3soG', width = '100%', height = 600 }: UnicornStudioProps) {
  useEffect(() => {
    // Load Unicorn Studio script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      !function(){
        var u=window.UnicornStudio;
        if(u&&u.init){
          if(document.readyState==="loading"){
            document.addEventListener("DOMContentLoaded",function(){u.init()})
          }else{
            u.init()
          }
        }else{
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
          i.onload=function(){
            if(document.readyState==="loading"){
              document.addEventListener("DOMContentLoaded",function(){
                if(window.UnicornStudio && window.UnicornStudio.init){
                  window.UnicornStudio.init()
                }
              })
            }else{
              if(window.UnicornStudio && window.UnicornStudio.init){
                window.UnicornStudio.init()
              }
            }
          };
          (document.head||document.body).appendChild(i)
        }
      }()
    `
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      data-us-project={projectId}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      className="animate-fadeIn"
    />
  )
}
