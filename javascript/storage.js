localStorage
sessionStorage
cookies


localStorage
> presistant storage
> value never delete by itself
> long term storage
> available acorss the browser

localStorage.setItem("city","delhi")
undefined
localStorage.getItem('city')
"delhi"
localStorage.removeItem('city')
undefined
localStorage.getItem('city')
null
localStorage.setItem("city","delhi")

sessionStorage
> temp storage
> value delete as soon as you close the tab
> short term storage
> available only in particular tab

sessionStorage.setItem('country','India')
undefined
sessionStorage.getItem('country')
"India"
sessionStorage.removeItem('country')
undefined
sessionStorage.setItem('country','India')

cookies
save wrt to url
expires in time

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1575624254.1630746263; _gat_gtag_UA_131256843_1=1"
document.cookie="user=admin; expires=Sun, 06 Sep 2021 01:00:00 UTC"
"user=admin; expires=Sun, 06 Sep 2021 01:00:00 UTC"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1575624254.1630746263; user=admin"