bluetooth.onBluetoothConnected(function () {
    bluetooth.startTemperatureService()
})
bluetooth.onBluetoothDisconnected(function () {
	
})
weatherbit.startWeatherMonitoring()
basic.forever(function () {
    basic.showNumber(weatherbit.temperature() / 100)
})
