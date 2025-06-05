    if (showLogin) {
        return <LoginScreen />; // Return the LoginScreen component
    }
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/icon.png")} style={styles.icon} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
    },
});
