import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.unit.text.BasicTextFieldValue
import androidx.compose.ui.unit.text.TextFieldVaue

@Composable
fun TemperatureScreen() {
    var temperatureValue by remember { mutableStateOf(TextFieldValue(text = "")) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        BasicTextField(
            value = temperatureValue,
            onValueChange = {
                temperatureValue = it
            },
            textStyle = TextStyle(fontSize = 24.sp),
            keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.Number),
            modifier = Modifier
                .fillMaxWidth()
                .onFocusChanged { focusState ->
                    if (!focusState.isFocused) {
                        // Handle temperature conversion here
                        val inputTemperature = temperatureValue.text.toFloatOrNull() ?: 0f
                        // Perform temperature conversion logic
                        val convertedTemperature = convertTemperature(inputTemperature)
                        // Update the text field with the converted temperature
                        temperatureValue = TextFieldValue(text = convertedTemperature.toString())
                    }
                }
        )
    }
}

fun convertTemperature(temperature: Float): Float {
    // Implement your temperature conversion logic here (e.g., Celsius to Fahrenheit)
    // For example, to convert from Celsius to Fahrenheit:
    // (Celsius * 9/5) + 32
    return (temperature * 9/5) + 32
}