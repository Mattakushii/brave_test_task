# Тестовое задание

## [Ссылка на приложение](https://brave-test-task.vercel.app)


## Задание на рефакторинг
```javascript

function func(string, testLetterA, testLetterB) {

    let aIndex = -1;
    let bIndex = -1;
    
    if (string) {
        for(let i = string.length - 1; i > 0; i--) {
            if(aIndex == -1 && bIndex == -1) {
                if(string[i] == testLetterA) {
                    aIndex = i;
                } 
                if(string[i] == testLetterB) {
                    bIndex = i;
                }
            }
        }

        if (aIndex != -1) {
            if (bIndex == -1) {
                return aIndex;
            } else { 
                return Math.max(aIndex, bIndex);
            }
        }
        
        if (bIndex != -1) {
            return bIndex;
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}
```
