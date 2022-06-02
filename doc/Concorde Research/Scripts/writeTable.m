clc;clear;
filename = '../Concord_locs.xlsx';
outfile  = 'BlackBirdTable.html';

%% Read file
data = readtable(filename);
N = length(data.Longitude);

%% Open output file
fid =  fopen(outfile,'wt');

%% Write data
% Heading
fprintf(fid,'<table>\n');
fprintf(fid,'\t<tr>\n');
fprintf(fid,'\t\t<th>SN</th>\n');
fprintf(fid,'\t\t<th>Museum</th>\n');
fprintf(fid,'\t\t<th>City</th>\n');
fprintf(fid,'\t\t<th>State</th>\n');
fprintf(fid,'\t</tr>\n');

% Properties of each point
for i = 1:N
    fprintf(fid,'\t<tr>\n');
    fprintf(fid,'\t\t<td>%s</td>\n',data.SN{i});
    fprintf(fid,'\t\t<td>%s</td>\n',data.Location{i});
    fprintf(fid,'\t\t<td>%s</td>\n',data.City{i});
    fprintf(fid,'\t\t<td>%s</td>\n',data.Country{i});
    fprintf(fid,'\t</tr>\n');
end

% Footer
fprintf(fid,'</table>\n');