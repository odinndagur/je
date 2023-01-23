
# original_line.length / 2 er hversu mörg slots við þurfum

# finna línur
# fjöldi slots eftir í nuverandi línu er lines[0].length
lines = ['a','b']
target_slots = 3

if lines[0].length <= target_slots:
    # splitta alla stafina
    pass
else:
    chars = lines[0][:target_slots*2]
    #     target_slots = 3
    #     0,1,2
    #     3,4,5
    #     i   0, 1, 2
    #     i+3 3  4  5
    #     for i in range(target_slots):
    #         text = line[i] + line[i+target_slots]
        
