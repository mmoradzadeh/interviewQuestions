/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    
    let alarmCounter = [];
    let laserNumber = 0;
    
    function charCounter (alarms){
        let alarmNumber = alarms.split('');
        let result = 0;
        for (let i = 0; i < alarmNumber.length; i++){
            if (alarmNumber[i]==='1'){
                result++;
            }
        }
        return result;
    }

    for (let i = 0; i < bank.length; i++){
        alarmCounter [i] = charCounter(bank[i]);
    }
    alarmCounter = alarmCounter.filter((alarm)=> alarm > 0);
    
    for (let i = 0; i < alarmCounter.length - 1; i++){
        
        laserNumber += (alarmCounter[i] * alarmCounter[i+1]);
    }

    return laserNumber;
};