function time_since_update() {

    last_update = new Date('2021-05-14')
    now = Date.now()
    difference = now-last_update
    days = difference/86400000
    document.write(days) 
}   
