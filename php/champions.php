<?php
ini_set('max_execution_time', 300);
include('init.php');
include('api/php-riot-api.php');
include('api/FileSystemCache.php');

$api = new riotapi('euw');
$api_cache = new riotapi('euw', new FileSystemCache('api/cache/'));

$champions = $api->getChampion();
$championsName = json_decode(file_get_contents('data/name.json'),true);
sort($championsName['championsname']);
sort($champions['champions']);
$data = array();
foreach ($champions as $champion) {
for ($i=0; $i < count($champion);$i++) {
    $data[$i]['id']    = $championsName['championsname'][$i]['id'];
    $data[$i]['name']    = $championsName['championsname'][$i]['name'];
    $data[$i]['key']  = $championsName['championsname'][$i]['key'];
    $data[$i]['free']  = $champion[$i]['freeToPlay'];
}
header('Content-Type: application/json');
$json = json_encode($data);
echo $json;

}
