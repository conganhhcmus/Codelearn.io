std::string soloBingoGame(std::vector<std::vector<int>> a, std::vector<std::vector<int>> b, std::vector<int> search)
{
    for (int i : search)
    {
        bool win_first = false;
        bool win_second = false;
        for (int j = 0; j < a.size(); j++)
        {
            for (int k = 0; k < a.size(); k++)
            {
                //console.log("Search:", i);
                if (a[j][k] == i)
                    a[j][k] = 0;
                if (b[j][k] == i)
                    b[j][k] = 0;
            }
        }
        // check winlose

        //check duong cheo
        int cheo_chinh = 0;
        int cheo_phu = 0;
        for (int k = 0; k < a.size(); k++)
        {
            cheo_chinh += a[k][k];
            cheo_phu += a[k][4 - k];
        }
        if (cheo_chinh == 0 || cheo_phu == 0) win_first = true;

        cheo_chinh = 0;
        cheo_phu = 0;
        for (int k = 0; k < b.size(); k++)
        {
            cheo_chinh += b[k][k];
            cheo_phu += b[k][4 - k];
        }
        if (cheo_chinh == 0 || cheo_phu == 0) win_second = true;

        // check row and col
        for (int j = 0; j < a.size(); j++)
        {
            int row = 0;
            int col = 0;
            for (int k = 0; k < a.size(); k++)
            {
                row += a[j][k];
                col += a[k][j];
            }
            //console.log("Long: ", row, col);
            if (row == 0 || col == 0) win_first = true;

            row = 0;
            col = 0;
            for (int k = 0; k < b.size(); k++)
            {
                row += b[j][k];
                col += b[k][j];
            }
            //console.log("Phu: ", row, col);
            if (row == 0 || col == 0) win_second = true;
        }

        if(win_first && win_second) return "Good";
        if(win_first) return "Long";
        if(win_second) return "Phu";
    }

    return "Good";
}