weatherbit.startWeatherMonitoring()
basic.forever(function () {
    basic.showNumber(weatherbit.temperature() / 100)
})
