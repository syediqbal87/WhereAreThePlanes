clc;clear;
filename = '../Shuttle Research/shuttle_locs.csv';
outfile  = 'ShuttleLocation.geojson';

%% Read file
data = readCSV(filename);
N = length(data.title);

%% Open output file
fid = fopen(outfile,'wt');

%% Write data
% Heading
fprintf(fid,'{"markers": [],\n');
fprintf(fid,'  "type": "FeatureCollection",\n');
fprintf(fid,'  "properties": {"simplify": 4}, "groups": [],\n'); 
fprintf(fid,'  "features": [\n');

% Properties of each point
for i = 1:N
    fprintf(fid,'   {\n');	
    fprintf(fid,'	"geometry": {\n');
    fprintf(fid,'		"type": "Point",\n'); 
    fprintf(fid,'		"coordinates": [%10.8f,%10.8f]},\n',data.latitude(i),data.longitude(i)); 
    fprintf(fid,'	"type": "Feature",\n');
    fprintf(fid,'	"properties": {\n');
    fprintf(fid,'		"url": "%s",\n',data.url{i}); 
    fprintf(fid,'		"description": "%s",\n',data.description{i}); 
    fprintf(fid,'		"marker-symbol": "%s",\n',data.icon{i}); 
    fprintf(fid,'		"title": "%s"\n',data.title{i});
    if i == N
        fprintf(fid,'	}}\n');
    else
        fprintf(fid,'	}},\n');
    end
end

% Footer
fprintf(fid,'	]\n');
fprintf(fid,'}\n');

%% Clean up
fclose(fid);