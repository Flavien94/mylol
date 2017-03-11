<?php
// include 'ChromePhp.php';
// ChromePhp::log('Hello console!');
// // ChromePhp::warn('something went wrong!');
include('init.php');
include('api/php-riot-api.php');
include('api/FileSystemCache.php');

$api = new riotapi('euw');
$api_cache = new riotapi('euw', new FileSystemCache('api/cache/'));

$postdata = file_get_contents("php://input");
if (isset($postdata)) {
  $request = json_decode($postdata);
  // $api_username = str_replace(" ", "",strtolower($request->data));
  $api_username = 'lowftwar';
  $ranked_stats = end($api->getStats($api->getSummonerByName($api_username)[$api_username]['id'],'ranked')['champions'])['stats'];
  // ChromePhp::log($ranked_stats);
  // print_r ($ranked_stats);
  $stats = array(
    'totalKill' =>$ranked_stats['totalChampionKills'],
    'totalDeaths' =>$ranked_stats['totalDeathsPerSession'],
    'totalAssist' =>$ranked_stats['totalAssists'],
    'MostKill' =>$ranked_stats['maxChampionsKilled'],
    'MostDeaths' =>$ranked_stats['maxNumDeaths'],
  );
  // ChromePhp::log($stats);
  $data = array();
  for ($i=0; $i < count($stats) ; $i++) {
      $data[$i]['totalKill']    = $stats['totalKill'];
      $data[$i]['totalDeaths']  = $stats['totalDeaths'];
      $data[$i]['totalAssist']  = $stats['totalAssist'];
      $data[$i]['MostKill']  = $stats['MostKill'];
      $data[$i]['MostDeaths']  = $stats['MostDeaths'];
      break;
    }
    header('Content-Type: application/json');
    $json = json_encode($data);
    echo $json;
}
