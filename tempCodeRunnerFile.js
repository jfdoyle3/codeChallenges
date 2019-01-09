
        var dividerDown =
          divider % 2 !== 0
            ? process.stdout.write(board.dash)
            : process.stdout.write(board.plus);
        process.stdout.write("\n");
      } 