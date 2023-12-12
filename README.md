 <h3 align="center">City Weather App</h3>
 <h5 align="center">Find out the weather in major cities around the world!</h5>

  <p align="center">
    A simple and responsive mobile app (ios and android) that shows the weather according to cities in the world.
</p>

## The app in pictures

<iframe width="560" height="315" src="https://www.youtube.com/embed/R4whQknDBHw?si=QMTMtd8X_f1z7Y2v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p align="center"><img style="margin: 30px;" width="250" src="https://github.com/Navedms/cityWeatherApp/blob/main/assets/screenShots/1.png"></p><br><br>
<p align="center"><img width="250" src="https://github.com/Navedms/cityWeatherApp/blob/main/assets/screenShots/2.png"></p><br><br>
<p align="center"><img style="margin: 30px;" width="250" src="https://github.com/Navedms/cityWeatherApp/blob/main/assets/screenShots/3.png"></p><br><br>
<p align="center"><img width="250" src="https://github.com/Navedms/cityWeatherApp/blob/main/assets/screenShots/4.png"></p><br><br>

### Built With

This React-Native app was built with these Api and Libraries:

-   [AccuWeather.com API]
-   [react]
-   [react-native]
-   [react-redux]
-   [reduxjs/toolkit]
-   [TypeScript]
-   [react-navigation]
-   [apisauce]
-   [dayjs]
-   [expo]
-   [expo/vector-icons]
-   [formik]
-   [lottie-react-native]
-   [yup]
-   and more...

## Usage

After downloading and launching the app, You will see two screens. the main screen and the weather screen

```sh
MainScreen
```

The main screen displays a grid list of cities. Filters and sorting can be used to display the grid list of cities in a different order or filter by city or country.
Clicking on one of the cities will take the user to the weather screen.

```sh
WeatherScreen
```

The weather screen displays all relevant details about the city you selected. you can see the current weather and a 5-day forecast of the selected location. you can also click on the current weather temperature unit (C / F) to switch between the units.
At the bottom of the screen, additional general details about the city you selected will be displayed.

```sh
Errors
```

<b>The most common error: "409 Conflict: The allowed number of requests has been exceeded":</b>
Because the accuweather.com API key we use is a free key for developers. There is a limit of 50 requests per day.
In such a case, an error will be displayed (in both screens) and in some cases, when there is no data at all about the city, it will not be possible to switch to the weather screen and an error will appear instead.

<b>Design issues:</b>
The app does not support Android devices with RTL operating system. In such cases, you may experience severe problems in the design of the application.

## Contact

If you have any questions about this application, You can contact me:

Ohad Nave - [Linkedin](https://www.linkedin.com/in/ohadnave/)

email: ohadnave@gmail.com

## Thanks!

Thank you!
