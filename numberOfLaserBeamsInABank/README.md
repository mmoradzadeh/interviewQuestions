# numberOfBeams Function

This JavaScript function, `numberOfBeams`, takes an array of strings (`bank`) as an input. Each string in the array represents an alarm system with '1' indicating an active alarm and '0' indicating an inactive alarm.

## Functionality

The function calculates the number of laser beams that would be triggered if someone were to pass through all the alarms in the bank. It does this by counting the number of active alarms in each system and then multiplies the count of active alarms in each pair of consecutive systems.

## Usage

Here is an example of how to use the `numberOfBeams` function:

```javascript
let bank = ['1101', '1011', '1001', '1111'];
let result = numberOfBeams(bank);
console.log(result); // Outputs the total number of laser beams
```

In this example, the `bank` array represents four alarm systems. The function will calculate the total number of laser beams that would be triggered if someone were to pass through all the alarms.

## Parameters

- `bank` (string[]): An array of strings where each string represents an alarm system. '1' indicates an active alarm and '0' indicates an inactive alarm.

## Returns

- The function returns a number which represents the total number of laser beams that would be triggered if someone were to pass through all the alarms in the bank.