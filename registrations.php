<?php
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "database"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize and insert data for both adult and child
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $is_adult = isset($_POST['first_name_adult']) ? true : false;

    if ($is_adult) {
        $first_name = $_POST['first_name_adult'];
        $last_name = $_POST['last_name_adult'];
        $email = $_POST['email_adult'];
        $phone = $_POST['phone_adult'];
        $address = $_POST['address_adult'];
        $city = $_POST['city_adult'];
        $state = $_POST['state_adult'];
        $zip = $_POST['zip_adult'];
        $emergency_contact_name = $_POST['emergency_contact_name'];
        $emergency_contact_phone = $_POST['emergency_contact_phone'];
        $emergency_contact_relation = $_POST['emergency_contact_relation'];
        $registration_type = $_POST['registration_type_adult'];

        // Insert data into the database
        $sql = "INSERT INTO adult_registrations (first_name, last_name, email, phone, address, city, state, zip, emergency_contact_name, emergency_contact_phone, emergency_contact_relation, registration_type) 
                VALUES ('$first_name', '$last_name', '$email', '$phone', '$address', '$city', '$state', '$zip', '$emergency_contact_name', '$emergency_contact_phone', '$emergency_contact_relation', '$registration_type')";

    } else {
        $first_name = $_POST['first_name_child'];
        $last_name = $_POST['last_name_child'];
        $address = $_POST['address_child'];
        $birthdate = $_POST['birthdate_child'];
        $age = $_POST['age_child'];
        $grade = $_POST['grade_child'];
        $gender = $_POST['gender_child'];
        $parent_name = $_POST['parent_name_child'];
        $parent_phone = $_POST['parent_phone_child'];
        $parent_email = $_POST['parent_email_child'];
        $registration_type = $_POST['registration_type_child'];
        $health_status = $_POST['health_status_child'];
        $allergies = $_POST['allergies_child'];
        $health_details = $_POST['health_details_child'];

        // Insert data into the database
        $sql = "INSERT INTO child_registrations (first_name, last_name, address, birthdate, age, grade, gender, parent_name, parent_phone, parent_email, registration_type, health_status, allergies, health_details) 
                VALUES ('$first_name', '$last_name', '$address', '$birthdate', '$age', '$grade', '$gender', '$parent_name', '$parent_phone', '$parent_email', '$registration_type', '$health_status', '$allergies', '$health_details')";
    }

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
