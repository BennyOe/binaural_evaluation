<?php



// REST Endpoint for POST
$_SERVER['POST'];
// decode the JSON
$data = json_decode(file_get_contents('php://input'), true);

$filename = 'eval.csv';

// open csv file for writing
$f = fopen($filename, 'a');

if ($f === false) {
    die('Error opening the file ' . $filename);
}

// write each row at a time to a file
for ($i=0; $i <=23 ; $i++) { 
    // get the row
    $row = $data[$i];
    // extract the attributes
    $id = $row['id'];
    $positions = $row['positions'];
    array_unshift($positions, $id);
    //write to file
    fputcsv($f, $positions);
}

// close the file
fclose($f);
?>
