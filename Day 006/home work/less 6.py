import random
import curses

def draw_board(win, board):
    for y, row in enumerate(board):
        for x, char in enumerate(row):
            win.addch(y, x * 2, char)

def draw_piece(win, piece, offset):
    for y, row in enumerate(piece):
        for x, char in enumerate(row):
            win.addch(y + offset[1], (x + offset[0]) * 2, char)

def rotate(piece):
    return list(zip(*reversed(piece)))

def is_valid_move(board, piece, offset):
    for y, row in enumerate(piece):
        for x, char in enumerate(row):
            if char != ' ' and (board[y + offset[1]][x + offset[0]] != ' ' or
                                x + offset[0] < 0 or x + offset[0] >= len(board[0]) or
                                y + offset[1] >= len(board)):
                return False
    return True

def merge_board(board, piece, offset):
    for y, row in enumerate(piece):
        for x, char in enumerate(row):
            if char != ' ':
                board[y + offset[1]][x + offset[0]] = char

def clear_lines(board):
    lines_to_clear = [i for i, row in enumerate(board) if all(cell != ' ' for cell in row)]
    for line in reversed(lines_to_clear):
        del board[line]
        board.insert(0, [' '] * len(board[0]))

def main(stdscr):
    curses.curs_set(0)
    stdscr.timeout(100)  # Set a delay of 100 milliseconds between frames

    # Set up the initial game state
    board_width = 10
    board_height = 20
    board = [[' ' for _ in range(board_width)] for _ in range(board_height)]

    tetrominoes = [
        [['I'],
         ['I'],
         ['I'],
         ['I']],

        [['O', 'O'],
         ['O', 'O']],

        [['Z', ' '],
         ['Z', 'Z'],
         [' ', 'Z']],

        [[' ', 'S'],
         ['S', 'S'],
         ['S', ' ']],

        [['J', ' '],
         ['J', 'J'],
         ['J', ' '],
         ],

        [['L', ' '],
         ['L', 'L'],
         [' ', 'L']],

        [['T', 'T', 'T'],
         [' ', 'T', ' ']]
    ]

    current_piece = random.choice(tetrominoes)
    current_offset = [board_width // 2 - len(current_piece[0]) // 2, 0]

    while True:
        # Check for user input
        key = stdscr.getch()
        if key == ord('q'):
            break
        elif key == curses.KEY_RIGHT and is_valid_move(board, current_piece, [1, 0]):
            current_offset[0] += 1
        elif key == curses.KEY_LEFT and is_valid_move(board, current_piece, [-1, 0]):
            current_offset[0] -= 1
        elif key == curses.KEY_DOWN and is_valid_move(board, current_piece, [0, 1]):
            current_offset[1] += 1
        elif key == curses.KEY_UP:
            rotated_piece = rotate(current_piece)
            if is_valid_move(board, rotated_piece, current_offset):
                current_piece = rotated_piece

        # Move the piece down
        if is_valid_move(board, current_piece, [0, 1]):
            current_offset[1] += 1
        else:
            merge_board(board, current_piece, current_offset)
            clear_lines(board)

            # Spawn a new piece
            current_piece = random.choice(tetrominoes)
            current_offset = [board_width // 2 - len(current_piece[0]) // 2, 0]

            # Check if the new piece immediately collides
            if not is_valid_move(board, current_piece, current_offset):
                break

        # Clear the screen
        stdscr.clear()

        # Draw the board and current piece
        draw_board(stdscr, board)
        draw_piece(stdscr, current_piece, current_offset)

        # Refresh the screen
        stdscr.refresh()

if __name__ == "__main__":
    curses.wrapper(main)