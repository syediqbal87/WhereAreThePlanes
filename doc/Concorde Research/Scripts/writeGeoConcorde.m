clc;clear;
filename = '../Concord_locs.xlsx';
outfile  = 'ConcordeLocation.geojson';

%% Read file
data = readtable(filename);
N = length(data.Longitude);
%% Open output file
fid = fopen(outfile,'wt');

%% Write data
% Heading
fprintf(fid,'{\n');
fprintf(fid,'  "features": [\n');

% Properties of each point
for i = 1:N
    fprintf(fid,'	{"geometry": {\n');
    fprintf(fid,'		"type": "Point",\n'); 
    fprintf(fid,'		"coordinates": [%10.8f,%10.8f]},\n',data.Latitude(i),data.Longitude(i)); 
    fprintf(fid,'   "type": "Feature",\n');
    fprintf(fid,'        "properties": {\n');
    fprintf(fid,'		 "url": "%s",\n',data.URL{i}); 
    fprintf(fid,'		 "description": "%s (%s)",\n',data.SN{i},data.Type{i}); 
    fprintf(fid,'		 "title": "%s"\n',data.Location{i});
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