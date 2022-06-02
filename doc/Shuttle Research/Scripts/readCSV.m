function data = readCSV(filename,skip)

% Reads a CSV file and outputs it in a structure fromatted for MATLAB. This
% script is able to read both string and numbers in a file, but all columns
% need to have a consistent data tuype

% Input:
%  filename: Name of CSV file [string]
%  skip:     Skip number of lines before the header [integer]

% Output:
%  data: return structure with all data under thier respective header name

% Defaults
if nargin <2;skip = 0;end

% Code starts here
% Check to see if file exists
if exist(filename, 'file') == 2
    fid = fopen(filename,'r');                                              % Open file
else    
    str = ['File "' filename '" does not exist'];  
    error(str);
end

% Skip the excess text in the beginning of file
for i = 1:skip
    tline = fgetl(fid);                                                     % Read line, but do nothing with it i.e. skip
end

% Read headers
headers = fgetl(fid);                                                       % Read all of the headers
headers = strsplit(headers,',');                                            % Split the headers based on the comma delimieter 

% Replace bad names
headers = strtrim(headers);                                                 % Remove leading and trailing whitespaces
headers = strrep(headers,'#','');                                           % Remove '#'
headers = strrep(headers,' ','_');                                          % Replace spaces with '_'
headers = strrep(headers,'(','');                                           % Remove '('
headers = strrep(headers,')','');                                           % Remove ')'
headers = strrep(headers,'[','');                                           % Remove '['
headers = strrep(headers,']','');                                           % Remove ']'
headers = strrep(headers,'.','');                                           % Remove  '.'
headers = strrep(headers,'''','');                                          % Remove  '

N = length(headers);                                                        % Number of header (columns)
data = [];                                                                  % Start structure

% Read the rest of the file
i=0;                                                                        % Counter
while ~feof(fid)                                                            % Run loop until EoF is reached
    i=i+1;                                                                  % Counter + 1
    tline = fgetl(fid);                                                     % Get text in line
    tdata = strsplit(tline,',','CollapseDelimiters', false);                % Seperate text based on delimeter, but keep empty spaces i.e. ''

    % Put data in structure
    for j = 1:N
        name = headers{j};                                                  % Name of current header                                             
        data.(name){i} = tdata{j};
    end
end
fclose(fid);                                                                % Close file


% Check if data is a numeric or string
for i = 1:N
    % Assumes same data type exists throughout the column
    % and only checks the first entry 
    name = headers{i}; 
    isnum = ~isnan(str2double(data.(name){1}));                               % str2double of a string creates NaN
        if isnum
            % If cell is a number (have to use prenthesis)
            data.(name) = str2double(data.(name));    
        end
end
