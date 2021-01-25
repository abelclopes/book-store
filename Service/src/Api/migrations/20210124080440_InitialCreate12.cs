using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.migrations
{
    public partial class InitialCreate12 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RentBooks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCriation = table.Column<DateTime>(nullable: false),
                    DateUpdate = table.Column<DateTime>(nullable: true),
                    Excluded = table.Column<bool>(nullable: false),
                    BookId = table.Column<Guid>(nullable: true),
                    UserId = table.Column<Guid>(nullable: true),
                    Term = table.Column<int>(nullable: false),
                    WithdrawalDate = table.Column<DateTime>(nullable: false),
                    ReturnDate = table.Column<DateTime>(nullable: true),
                    Delivered = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentBooks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RentBooks_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RentBooks_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RentBooks_BookId",
                table: "RentBooks",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_RentBooks_UserId",
                table: "RentBooks",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RentBooks");
        }
    }
}
