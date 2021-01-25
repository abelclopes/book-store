using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.migrations
{
    public partial class InitialCreate14 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RentBooks_Books_BookId",
                table: "RentBooks");

            migrationBuilder.DropIndex(
                name: "IX_RentBooks_BookId",
                table: "RentBooks");

            migrationBuilder.AlterColumn<Guid>(
                name: "BookId",
                table: "RentBooks",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "BookId",
                table: "RentBooks",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.CreateIndex(
                name: "IX_RentBooks_BookId",
                table: "RentBooks",
                column: "BookId");

            migrationBuilder.AddForeignKey(
                name: "FK_RentBooks_Books_BookId",
                table: "RentBooks",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
