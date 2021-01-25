using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.migrations
{
    public partial class InitialCreate13 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RentBooks_Users_UserId",
                table: "RentBooks");

            migrationBuilder.DropIndex(
                name: "IX_RentBooks_UserId",
                table: "RentBooks");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "RentBooks",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "RentBooks",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.CreateIndex(
                name: "IX_RentBooks_UserId",
                table: "RentBooks",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_RentBooks_Users_UserId",
                table: "RentBooks",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
