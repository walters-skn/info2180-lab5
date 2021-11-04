<?php

//give access to file(CORS policy)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With"); 

$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$country = filter_input(INPUT_GET,'country',FILTER_SANITIZE_STRING);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

 $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
 ?>

<table>
<?php if ($context == 'cities'):?>
	<tr>
		<th>Name</th>
		<th>District</th>
		<th>Population</th>
	</tr>
	<?php foreach ($results as $row): ?>
	<tr>
		<th><?= $row['name']; ?></th>
		<th><?= $row['district']; ?></th>
		<th><?= $row['population']; ?></th>
	</tr>
<?php endforeach; ?>

<?php else: ?>
	<tr>
		<th>Name</th>
		<th>Contintent</th>
		<th>Independence</th>
		<th>Head of State</th>
	</tr>
<?php foreach ($results as $row): ?>
	<tr>
		<td><?= $row['name']; ?></td>
		<td><?= $row['continent']; ?></td>
		<td><?= $row['independence_year']; ?></td>
		<td><?= $row['head_of_state']; ?></td>
	</tr>
<?php endforeach; ?>
<?php endif ?>
</table>